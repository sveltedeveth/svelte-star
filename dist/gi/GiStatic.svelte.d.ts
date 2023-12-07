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
export type GiStaticProps = typeof __propDef.props;
export type GiStaticEvents = typeof __propDef.events;
export type GiStaticSlots = typeof __propDef.slots;
export default class GiStatic extends SvelteComponentTyped<GiStaticProps, GiStaticEvents, GiStaticSlots> {
}
export {};
