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
export type GiConquerorProps = typeof __propDef.props;
export type GiConquerorEvents = typeof __propDef.events;
export type GiConquerorSlots = typeof __propDef.slots;
export default class GiConqueror extends SvelteComponentTyped<GiConquerorProps, GiConquerorEvents, GiConquerorSlots> {
}
export {};
