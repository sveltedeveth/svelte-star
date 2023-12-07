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
export type FaDivideProps = typeof __propDef.props;
export type FaDivideEvents = typeof __propDef.events;
export type FaDivideSlots = typeof __propDef.slots;
export default class FaDivide extends SvelteComponentTyped<FaDivideProps, FaDivideEvents, FaDivideSlots> {
}
export {};
