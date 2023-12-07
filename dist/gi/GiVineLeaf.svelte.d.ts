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
export type GiVineLeafProps = typeof __propDef.props;
export type GiVineLeafEvents = typeof __propDef.events;
export type GiVineLeafSlots = typeof __propDef.slots;
export default class GiVineLeaf extends SvelteComponentTyped<GiVineLeafProps, GiVineLeafEvents, GiVineLeafSlots> {
}
export {};
