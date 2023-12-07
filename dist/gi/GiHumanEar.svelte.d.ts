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
export type GiHumanEarProps = typeof __propDef.props;
export type GiHumanEarEvents = typeof __propDef.events;
export type GiHumanEarSlots = typeof __propDef.slots;
export default class GiHumanEar extends SvelteComponentTyped<GiHumanEarProps, GiHumanEarEvents, GiHumanEarSlots> {
}
export {};
