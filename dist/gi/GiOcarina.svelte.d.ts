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
export type GiOcarinaProps = typeof __propDef.props;
export type GiOcarinaEvents = typeof __propDef.events;
export type GiOcarinaSlots = typeof __propDef.slots;
export default class GiOcarina extends SvelteComponentTyped<GiOcarinaProps, GiOcarinaEvents, GiOcarinaSlots> {
}
export {};
