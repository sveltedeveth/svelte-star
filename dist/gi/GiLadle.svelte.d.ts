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
export type GiLadleProps = typeof __propDef.props;
export type GiLadleEvents = typeof __propDef.events;
export type GiLadleSlots = typeof __propDef.slots;
export default class GiLadle extends SvelteComponentTyped<GiLadleProps, GiLadleEvents, GiLadleSlots> {
}
export {};
