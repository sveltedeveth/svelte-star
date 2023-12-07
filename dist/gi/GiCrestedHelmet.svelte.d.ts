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
export type GiCrestedHelmetProps = typeof __propDef.props;
export type GiCrestedHelmetEvents = typeof __propDef.events;
export type GiCrestedHelmetSlots = typeof __propDef.slots;
export default class GiCrestedHelmet extends SvelteComponentTyped<GiCrestedHelmetProps, GiCrestedHelmetEvents, GiCrestedHelmetSlots> {
}
export {};
