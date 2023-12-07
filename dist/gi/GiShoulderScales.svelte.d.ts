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
export type GiShoulderScalesProps = typeof __propDef.props;
export type GiShoulderScalesEvents = typeof __propDef.events;
export type GiShoulderScalesSlots = typeof __propDef.slots;
export default class GiShoulderScales extends SvelteComponentTyped<GiShoulderScalesProps, GiShoulderScalesEvents, GiShoulderScalesSlots> {
}
export {};
