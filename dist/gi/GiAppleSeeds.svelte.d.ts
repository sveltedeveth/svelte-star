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
export type GiAppleSeedsProps = typeof __propDef.props;
export type GiAppleSeedsEvents = typeof __propDef.events;
export type GiAppleSeedsSlots = typeof __propDef.slots;
export default class GiAppleSeeds extends SvelteComponentTyped<GiAppleSeedsProps, GiAppleSeedsEvents, GiAppleSeedsSlots> {
}
export {};
