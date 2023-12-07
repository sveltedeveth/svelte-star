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
export type GiPalmProps = typeof __propDef.props;
export type GiPalmEvents = typeof __propDef.events;
export type GiPalmSlots = typeof __propDef.slots;
export default class GiPalm extends SvelteComponentTyped<GiPalmProps, GiPalmEvents, GiPalmSlots> {
}
export {};
