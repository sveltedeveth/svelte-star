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
export type GiHighTideProps = typeof __propDef.props;
export type GiHighTideEvents = typeof __propDef.events;
export type GiHighTideSlots = typeof __propDef.slots;
export default class GiHighTide extends SvelteComponentTyped<GiHighTideProps, GiHighTideEvents, GiHighTideSlots> {
}
export {};
