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
export type GiTriremeProps = typeof __propDef.props;
export type GiTriremeEvents = typeof __propDef.events;
export type GiTriremeSlots = typeof __propDef.slots;
export default class GiTrireme extends SvelteComponentTyped<GiTriremeProps, GiTriremeEvents, GiTriremeSlots> {
}
export {};
