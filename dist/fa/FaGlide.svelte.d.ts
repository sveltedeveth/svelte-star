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
export type FaGlideProps = typeof __propDef.props;
export type FaGlideEvents = typeof __propDef.events;
export type FaGlideSlots = typeof __propDef.slots;
export default class FaGlide extends SvelteComponentTyped<FaGlideProps, FaGlideEvents, FaGlideSlots> {
}
export {};
