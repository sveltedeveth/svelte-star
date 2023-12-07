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
export type GiOpenPalmProps = typeof __propDef.props;
export type GiOpenPalmEvents = typeof __propDef.events;
export type GiOpenPalmSlots = typeof __propDef.slots;
export default class GiOpenPalm extends SvelteComponentTyped<GiOpenPalmProps, GiOpenPalmEvents, GiOpenPalmSlots> {
}
export {};
