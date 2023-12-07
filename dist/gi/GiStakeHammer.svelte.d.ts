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
export type GiStakeHammerProps = typeof __propDef.props;
export type GiStakeHammerEvents = typeof __propDef.events;
export type GiStakeHammerSlots = typeof __propDef.slots;
export default class GiStakeHammer extends SvelteComponentTyped<GiStakeHammerProps, GiStakeHammerEvents, GiStakeHammerSlots> {
}
export {};
