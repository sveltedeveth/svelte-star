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
export type GiScubaTanksProps = typeof __propDef.props;
export type GiScubaTanksEvents = typeof __propDef.events;
export type GiScubaTanksSlots = typeof __propDef.slots;
export default class GiScubaTanks extends SvelteComponentTyped<GiScubaTanksProps, GiScubaTanksEvents, GiScubaTanksSlots> {
}
export {};
