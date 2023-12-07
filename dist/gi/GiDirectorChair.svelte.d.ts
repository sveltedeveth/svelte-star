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
export type GiDirectorChairProps = typeof __propDef.props;
export type GiDirectorChairEvents = typeof __propDef.events;
export type GiDirectorChairSlots = typeof __propDef.slots;
export default class GiDirectorChair extends SvelteComponentTyped<GiDirectorChairProps, GiDirectorChairEvents, GiDirectorChairSlots> {
}
export {};
