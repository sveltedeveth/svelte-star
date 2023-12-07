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
export type GiDunceCapProps = typeof __propDef.props;
export type GiDunceCapEvents = typeof __propDef.events;
export type GiDunceCapSlots = typeof __propDef.slots;
export default class GiDunceCap extends SvelteComponentTyped<GiDunceCapProps, GiDunceCapEvents, GiDunceCapSlots> {
}
export {};
