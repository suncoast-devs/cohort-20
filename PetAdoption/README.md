# PetAdoption

Our PEDAC process applies to the entire task of building
the application. You'll see that as we proceed we'll apply PEDAC again to
smaller pieces of the task.

This process of "Breaking a Big Problem into Smaller Pieces" is a common
approach in programming and in software design. It works because:

1. Problems are often so large we cannot keep all the details in our minds at
   once.
2. We often don't know everything we need to know about a problem at the start.

We'll begin with a high level statement of the PEDAC process for the application
and apply the approach as we work our way through the details.

## Starting with the "P"roblem

**P - Problem**

> Make an application that allows us to keep track of pets at a pet adoption
> agency.

Create an application that allows us to:

`C R U D`

- Create: Add (create) a new pet that is available for adoption
- Read: Get lists of pets that are available for adoption - perhaps by different
  attributes.
- Update: Update information about a pet that is available for adoption
- Delete: Remove a pet upon adoption

## What are some "E"xamples of pets?

Next lets consider what we want to keep track of for pets. What are some of the
attributes of a pet we want to keep track of in this system? A good way to do
this is to come up with some **EXAMPLES** of the data the application will work
with.

Perhaps we consider the following pets as examples of the types of information
our system will deal with.

| Species | Gender | Age | Name    | Color  | Size   |
| ------- | ------ | --- | ------- | ------ | ------ |
| Dog     | Female | 1   | Sadie   | Blonde | Medium |
| Cat     | Male   | 3   | Russell | Black  | Small  |
| Dog     | Male   | 3   | Kodak   | White  | Large  |

## What kind of "D"ata will we be working with?

Looking at our examples we may determine the following data types will apply:

- `Species` - string
- `Gender` - string
- `Age` - int
- `Name` - string
- `Color` - string
- `Size` - string

These attributes belong to a `Pet` which we will represent using a `class`.

These `Pet`s will be placed in a `List` to keep track of more than one.

## Describe how the problem will be solved with an "A"lgorithm

At this point we should think about the high level list of things our
application must do.

We'd expect our algorithm to reflect the details of the `Problem` but in
slightly more detail.

```
Welcome the user to the application

While the user hasn't chosen to quit the application
  Show them a menu of options they can do:
    - Add a new pet
    - See all the pets up for adoption
    - Input a name of a pet that has been adopted to remove them from the list
    - Input a name of a pet and update their size
    - Quit the applications

Say goodbye
```
