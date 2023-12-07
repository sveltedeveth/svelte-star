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
export type TiPrinterProps = typeof __propDef.props;
export type TiPrinterEvents = typeof __propDef.events;
export type TiPrinterSlots = typeof __propDef.slots;
export default class TiPrinter extends SvelteComponentTyped<TiPrinterProps, TiPrinterEvents, TiPrinterSlots> {
}
export {};
