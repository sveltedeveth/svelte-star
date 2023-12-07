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
export type GiTurtleProps = typeof __propDef.props;
export type GiTurtleEvents = typeof __propDef.events;
export type GiTurtleSlots = typeof __propDef.slots;
export default class GiTurtle extends SvelteComponentTyped<GiTurtleProps, GiTurtleEvents, GiTurtleSlots> {
}
export {};
