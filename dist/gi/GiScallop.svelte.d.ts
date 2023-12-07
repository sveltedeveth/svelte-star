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
export type GiScallopProps = typeof __propDef.props;
export type GiScallopEvents = typeof __propDef.events;
export type GiScallopSlots = typeof __propDef.slots;
export default class GiScallop extends SvelteComponentTyped<GiScallopProps, GiScallopEvents, GiScallopSlots> {
}
export {};
