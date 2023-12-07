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
export type GiShurikenProps = typeof __propDef.props;
export type GiShurikenEvents = typeof __propDef.events;
export type GiShurikenSlots = typeof __propDef.slots;
export default class GiShuriken extends SvelteComponentTyped<GiShurikenProps, GiShurikenEvents, GiShurikenSlots> {
}
export {};
