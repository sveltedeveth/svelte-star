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
export type GiTennisCourtProps = typeof __propDef.props;
export type GiTennisCourtEvents = typeof __propDef.events;
export type GiTennisCourtSlots = typeof __propDef.slots;
export default class GiTennisCourt extends SvelteComponentTyped<GiTennisCourtProps, GiTennisCourtEvents, GiTennisCourtSlots> {
}
export {};
