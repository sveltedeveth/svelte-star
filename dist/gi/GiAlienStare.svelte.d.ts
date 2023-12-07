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
export type GiAlienStareProps = typeof __propDef.props;
export type GiAlienStareEvents = typeof __propDef.events;
export type GiAlienStareSlots = typeof __propDef.slots;
export default class GiAlienStare extends SvelteComponentTyped<GiAlienStareProps, GiAlienStareEvents, GiAlienStareSlots> {
}
export {};
