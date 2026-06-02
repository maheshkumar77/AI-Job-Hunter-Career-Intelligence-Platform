import tensorflow as tf
from tensorflow.keras import layers, models
import matplotlib.pyplot as plt

#load Dataset
train_data=tf.keras.utils.image_dataset_from_directory(
    "archive/train",
    image_size=(200,200),
    batch_size=42
)

test_data=tf.keras.utils.image_dataset_from_directory(
    "archive/test",
    image_size=(200,200),
    batch_size=42

)

#get Class Name
class_names=train_data.class_names
print(class_names)

#Narmalize Image
narmalize_layer=tf.keras.layers.Rescaling(1./255)
train_data=train_data.map(
    lambda x,y :(narmalize_layer(x),y)
)
test_data=test_data.map(
    lambda x,y:(narmalize_layer(x),y)

)

#Build CNN Model
model = tf.keras.Sequential([

    tf.keras.layers.Conv2D(
        40,
        (3,3),
        activation='relu',
        input_shape=(200,200,3)
    ),

    tf.keras.layers.MaxPooling2D(2,2),

    tf.keras.layers.Conv2D(
        64,
        (3,3),
        activation='relu'
    ),

    tf.keras.layers.MaxPooling2D(2,2),

    tf.keras.layers.Flatten(),

    tf.keras.layers.Dense(
        128,
        activation='relu'
    ),

    tf.keras.layers.Dense(
        len(class_names),
        activation='softmax'
    )
])

#Compile Model
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

#train Model
history = model.fit(
    train_data,
    validation_data=test_data,
    epochs=10
)

model.save("vision_model.h5")