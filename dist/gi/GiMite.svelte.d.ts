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
export type GiMiteProps = typeof __propDef.props;
export type GiMiteEvents = typeof __propDef.events;
export type GiMiteSlots = typeof __propDef.slots;
export default class GiMite extends SvelteComponentTyped<GiMiteProps, GiMiteEvents, GiMiteSlots> {
}
export {};
