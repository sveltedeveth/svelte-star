import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GiThornedArrowProps = typeof __propDef.props;
export type GiThornedArrowEvents = typeof __propDef.events;
export type GiThornedArrowSlots = typeof __propDef.slots;
export default class GiThornedArrow extends SvelteComponentTyped<GiThornedArrowProps, GiThornedArrowEvents, GiThornedArrowSlots> {
}
export {};
