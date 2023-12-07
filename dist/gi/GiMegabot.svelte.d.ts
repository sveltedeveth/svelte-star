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
export type GiMegabotProps = typeof __propDef.props;
export type GiMegabotEvents = typeof __propDef.events;
export type GiMegabotSlots = typeof __propDef.slots;
export default class GiMegabot extends SvelteComponentTyped<GiMegabotProps, GiMegabotEvents, GiMegabotSlots> {
}
export {};
