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
export type GiKusarigamaProps = typeof __propDef.props;
export type GiKusarigamaEvents = typeof __propDef.events;
export type GiKusarigamaSlots = typeof __propDef.slots;
export default class GiKusarigama extends SvelteComponentTyped<GiKusarigamaProps, GiKusarigamaEvents, GiKusarigamaSlots> {
}
export {};
