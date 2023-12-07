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
export type WiStrongWindProps = typeof __propDef.props;
export type WiStrongWindEvents = typeof __propDef.events;
export type WiStrongWindSlots = typeof __propDef.slots;
export default class WiStrongWind extends SvelteComponentTyped<WiStrongWindProps, WiStrongWindEvents, WiStrongWindSlots> {
}
export {};
