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
export type GiSaxophoneProps = typeof __propDef.props;
export type GiSaxophoneEvents = typeof __propDef.events;
export type GiSaxophoneSlots = typeof __propDef.slots;
export default class GiSaxophone extends SvelteComponentTyped<GiSaxophoneProps, GiSaxophoneEvents, GiSaxophoneSlots> {
}
export {};
