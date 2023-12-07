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
export type GiManualMeatGrinderProps = typeof __propDef.props;
export type GiManualMeatGrinderEvents = typeof __propDef.events;
export type GiManualMeatGrinderSlots = typeof __propDef.slots;
export default class GiManualMeatGrinder extends SvelteComponentTyped<GiManualMeatGrinderProps, GiManualMeatGrinderEvents, GiManualMeatGrinderSlots> {
}
export {};
