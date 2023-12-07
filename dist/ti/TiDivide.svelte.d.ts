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
export type TiDivideProps = typeof __propDef.props;
export type TiDivideEvents = typeof __propDef.events;
export type TiDivideSlots = typeof __propDef.slots;
export default class TiDivide extends SvelteComponentTyped<TiDivideProps, TiDivideEvents, TiDivideSlots> {
}
export {};
