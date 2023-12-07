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
export type FaMizuniProps = typeof __propDef.props;
export type FaMizuniEvents = typeof __propDef.events;
export type FaMizuniSlots = typeof __propDef.slots;
export default class FaMizuni extends SvelteComponentTyped<FaMizuniProps, FaMizuniEvents, FaMizuniSlots> {
}
export {};
