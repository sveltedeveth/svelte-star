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
export type GiSwampBatProps = typeof __propDef.props;
export type GiSwampBatEvents = typeof __propDef.events;
export type GiSwampBatSlots = typeof __propDef.slots;
export default class GiSwampBat extends SvelteComponentTyped<GiSwampBatProps, GiSwampBatEvents, GiSwampBatSlots> {
}
export {};
