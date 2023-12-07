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
export type GiSpartanHelmetProps = typeof __propDef.props;
export type GiSpartanHelmetEvents = typeof __propDef.events;
export type GiSpartanHelmetSlots = typeof __propDef.slots;
export default class GiSpartanHelmet extends SvelteComponentTyped<GiSpartanHelmetProps, GiSpartanHelmetEvents, GiSpartanHelmetSlots> {
}
export {};
