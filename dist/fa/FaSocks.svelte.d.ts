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
export type FaSocksProps = typeof __propDef.props;
export type FaSocksEvents = typeof __propDef.events;
export type FaSocksSlots = typeof __propDef.slots;
export default class FaSocks extends SvelteComponentTyped<FaSocksProps, FaSocksEvents, FaSocksSlots> {
}
export {};
