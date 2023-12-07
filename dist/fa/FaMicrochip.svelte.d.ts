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
export type FaMicrochipProps = typeof __propDef.props;
export type FaMicrochipEvents = typeof __propDef.events;
export type FaMicrochipSlots = typeof __propDef.slots;
export default class FaMicrochip extends SvelteComponentTyped<FaMicrochipProps, FaMicrochipEvents, FaMicrochipSlots> {
}
export {};
