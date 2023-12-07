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
export type GiNeckBiteProps = typeof __propDef.props;
export type GiNeckBiteEvents = typeof __propDef.events;
export type GiNeckBiteSlots = typeof __propDef.slots;
export default class GiNeckBite extends SvelteComponentTyped<GiNeckBiteProps, GiNeckBiteEvents, GiNeckBiteSlots> {
}
export {};
