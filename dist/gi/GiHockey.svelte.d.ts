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
export type GiHockeyProps = typeof __propDef.props;
export type GiHockeyEvents = typeof __propDef.events;
export type GiHockeySlots = typeof __propDef.slots;
export default class GiHockey extends SvelteComponentTyped<GiHockeyProps, GiHockeyEvents, GiHockeySlots> {
}
export {};
