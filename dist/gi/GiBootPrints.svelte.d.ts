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
export type GiBootPrintsProps = typeof __propDef.props;
export type GiBootPrintsEvents = typeof __propDef.events;
export type GiBootPrintsSlots = typeof __propDef.slots;
export default class GiBootPrints extends SvelteComponentTyped<GiBootPrintsProps, GiBootPrintsEvents, GiBootPrintsSlots> {
}
export {};
