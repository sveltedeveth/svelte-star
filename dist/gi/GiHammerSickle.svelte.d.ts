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
export type GiHammerSickleProps = typeof __propDef.props;
export type GiHammerSickleEvents = typeof __propDef.events;
export type GiHammerSickleSlots = typeof __propDef.slots;
export default class GiHammerSickle extends SvelteComponentTyped<GiHammerSickleProps, GiHammerSickleEvents, GiHammerSickleSlots> {
}
export {};
