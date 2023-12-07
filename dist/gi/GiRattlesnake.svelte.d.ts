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
export type GiRattlesnakeProps = typeof __propDef.props;
export type GiRattlesnakeEvents = typeof __propDef.events;
export type GiRattlesnakeSlots = typeof __propDef.slots;
export default class GiRattlesnake extends SvelteComponentTyped<GiRattlesnakeProps, GiRattlesnakeEvents, GiRattlesnakeSlots> {
}
export {};
