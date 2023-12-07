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
export type GiPalisadeProps = typeof __propDef.props;
export type GiPalisadeEvents = typeof __propDef.events;
export type GiPalisadeSlots = typeof __propDef.slots;
export default class GiPalisade extends SvelteComponentTyped<GiPalisadeProps, GiPalisadeEvents, GiPalisadeSlots> {
}
export {};
