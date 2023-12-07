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
export type GiTriplePlierProps = typeof __propDef.props;
export type GiTriplePlierEvents = typeof __propDef.events;
export type GiTriplePlierSlots = typeof __propDef.slots;
export default class GiTriplePlier extends SvelteComponentTyped<GiTriplePlierProps, GiTriplePlierEvents, GiTriplePlierSlots> {
}
export {};
