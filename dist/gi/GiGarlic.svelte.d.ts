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
export type GiGarlicProps = typeof __propDef.props;
export type GiGarlicEvents = typeof __propDef.events;
export type GiGarlicSlots = typeof __propDef.slots;
export default class GiGarlic extends SvelteComponentTyped<GiGarlicProps, GiGarlicEvents, GiGarlicSlots> {
}
export {};
