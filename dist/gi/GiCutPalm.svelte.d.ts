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
export type GiCutPalmProps = typeof __propDef.props;
export type GiCutPalmEvents = typeof __propDef.events;
export type GiCutPalmSlots = typeof __propDef.slots;
export default class GiCutPalm extends SvelteComponentTyped<GiCutPalmProps, GiCutPalmEvents, GiCutPalmSlots> {
}
export {};
