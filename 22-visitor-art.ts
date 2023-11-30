
// Define the Visitor interface
interface Visitor {
  visitPainting(painting: Painting): void;
  visitSculpture(sculpture: Sculpture): void;
  visitArtifact(artifact: Artifact): void;
}

// Define the Exhibits
class Painting {
  constructor(public title: string, public artist: string) {}

  accept(visitor: Visitor): void {
    visitor.visitPainting(this);
  }
}

class Sculpture {
  constructor(public title: string, public artist: string) {}

  accept(visitor: Visitor): void {
    visitor.visitSculpture(this);
  }
}

class Artifact {
  constructor(public title: string, public artist: string) {}

  accept(visitor: Visitor): void {
    visitor.visitArtifact(this);
  }
}

// Implement the Concrete Visitors
class ArtLover implements Visitor {
  visitPainting(painting: Painting): void {
    console.log("Appreciating the painting...");
    console.log(`painting Title: ${painting.title}`);
    console.log(`painting Artist: ${painting.artist}`);
  }

  visitSculpture(sculpture: Sculpture): void {
    console.log("Admiring the sculpture...");
    console.log(`sculpture Title: ${sculpture.title}`);
    console.log(`sculpture Artist: ${sculpture.artist}`);

  }

  visitArtifact(artifact: Artifact): void {
    console.log("Examining the artifact...");
    console.log(`artifact Title: ${artifact.title}`);
    console.log(`artifact Artist: ${artifact.artist}`);

  }
}

class Curator implements Visitor {
  visitPainting(painting: Painting): void {
    console.log("Analyzing the painting...");
    console.log(`painting Title: ${painting.title}`);
    console.log(`painting Artist: ${painting.artist}`);
  }

  visitSculpture(sculpture: Sculpture): void {
    console.log("Researching the sculpture...");
    console.log(`sculpture Title: ${sculpture.title}`);
    console.log(`sculpture Artist: ${sculpture.artist}`);
  }

  visitArtifact(artifact: Artifact): void {
    console.log("Cataloging the artifact...");
    console.log(`artifact Title: ${artifact.title}`);
    console.log(`artifact Artist: ${artifact.artist}`);
  }
}

// Usage
const painting = new Painting("The Starry Night", "Vincent van Gogh");
const sculpture = new Sculpture("David", "Michelangelo");
const artifact = new Artifact("Rosetta Stone", "Unknown");

const artLover = new ArtLover();
const curator = new Curator();

painting.accept(artLover); // Output: Appreciating the painting...
sculpture.accept(artLover); // Output: Admiring the sculpture...
artifact.accept(artLover); // Output: Examining the artifact...

painting.accept(curator); // Output: Analyzing the painting...
sculpture.accept(curator); // Output: Researching the sculpture...
artifact.accept(curator); // Output: Cataloging the artifact...
