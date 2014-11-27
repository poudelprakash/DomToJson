var divArray=document.getElementsByTagName('div');
var rootDiv=divArray[0];
var finalObj=createObject(rootDiv);
console.log(finalObj);

function createObject(parentTag){
	var innerTag=parentTag.localName;
	var innerClass=parentTag.className;
	var innerId=parentTag.id;
	var dom;
	var childTags=[];
	for (var i = 0; i < parentTag.childElementCount; i++) {
		var child=parentTag.children[i];
		childTags[i]=createObject(child);
	};
	dom={
			tag: innerTag,
			class: innerClass,
			content: parentTag.innerText,
			children: childTags,
		}
	if(innerTag=="img"){
		dom={
			tag: innerTag,
			class: innerClass,
			id: innerId,
			src: parentTag.getAttribute("src")
		}

	}else if(innerTag=="button"){
		dom={
			tag: innerTag,
			class: innerClass,
			id: innerId,
			content: parentTag.innerText,
		}
		
	}else{
		dom={
			tag: innerTag,
			class: innerClass,
			content: parentTag.innerText,
			children: childTags,
		}
	}
	return dom;
}