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
export type GiSickleProps = typeof __propDef.props;
export type GiSickleEvents = typeof __propDef.events;
export type GiSickleSlots = typeof __propDef.slots;
export default class GiSickle extends SvelteComponentTyped<GiSickleProps, GiSickleEvents, GiSickleSlots> {
}
export {};
