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
export type GiMicrochipProps = typeof __propDef.props;
export type GiMicrochipEvents = typeof __propDef.events;
export type GiMicrochipSlots = typeof __propDef.slots;
export default class GiMicrochip extends SvelteComponentTyped<GiMicrochipProps, GiMicrochipEvents, GiMicrochipSlots> {
}
export {};
